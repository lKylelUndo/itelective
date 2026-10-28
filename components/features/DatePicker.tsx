"use client"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const DatePicker = () => {
  const [date, setDate] = useState<Date>()
  const router = useRouter()

  const handleSelect = (selectedDate: Date | undefined) => {
    if (!selectedDate) return

    setDate(selectedDate)

    // format date parts
    const year = format(selectedDate, "yyyy")
    const month = format(selectedDate, "MM")
    const day = format(selectedDate, "dd")

    router.push(`/blogs/date/${year}/${month}/${day}`)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!date}
          className="gap-2 border-hairline px-3 font-mono text-[13px] font-normal text-ink hover:data-[empty=true]:text-paper data-[empty=true]:text-urn"
        >
          <CalendarIcon className="size-4" aria-hidden />
          {date ? format(date, "MMM d, yyyy") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>

      <PopoverContent align="end" className="w-auto p-3">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker
