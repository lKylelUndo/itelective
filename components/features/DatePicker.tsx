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

    // console.log('year', year);
    // console.log('month', month);
    // console.log('day', day);


    router.push(`/blogs/date/${year}/${month}/${day}`)
  }

  // console.log('d', date);

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          asChild
          variant="outline"
          data-empty={!date}
          className="justify-start text-left font-normal data-[empty=true]:text-muted-foreground"
        >
          <div className="flex items-center">
            <CalendarIcon className="mr-2" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0">
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