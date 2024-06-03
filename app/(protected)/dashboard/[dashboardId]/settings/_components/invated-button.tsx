'use client'

import { inviteUserToDashboard } from '@/app/action/dashboard'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { useState } from 'react'

const formSchema = z.object({
  email: z.string().email({
    message: '이메일 형식으로 입력해 주세요.',
  }),
})

type Props = {
  dashboardId: number
}

export const InvitedButton = ({ dashboardId }: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  })

  const [isPending, setIsPending] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsPending(true)
    try {
      const invite = await inviteUserToDashboard({ dashboardId, ...values })
      if (!invite) {
        toast.error('대시보드 초대에 실패하였습니다.')
        return
      }
      toast.success('초대에 성공했습니다.')
      form.reset()
      setIsOpen(false)
    } catch (error) {
      toast.error('초대 중 오류가 발생했습니다.')
      console.error(error)
    } finally {
      setIsPending(false)
    }
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button className='flex gap-x-2'>
          <Plus className='h-5 w-5' />
          <span>초대하기</span>
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <AlertDialogHeader className='text-2xl font-bold'>
              초대하기
            </AlertDialogHeader>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='font-semibold'>이메일</FormLabel>
                  <FormControl>
                    <Input placeholder='test@email.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <AlertDialogFooter>
              <AlertDialogCancel className='px-10 py-6'>취소</AlertDialogCancel>
              <AlertDialogAction
                disabled={!form.formState.isValid || isPending}
                className='px-10 py-6'
                type='submit'
              >
                초대
              </AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  )
}
