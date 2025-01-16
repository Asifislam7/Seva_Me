import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import useCountAnimation from "./CountAnimation"
import { Users } from "lucide-react"

interface CardWithFormProps {
  count: number;
  message: string;
  icon: React.ReactNode;
}

export function CardWithForm(props: CardWithFormProps) {
    const animatedCount = useCountAnimation(props.count, 500); // 2000ms (2 seconds) duration
  return (
    <Card className="w-[350px] shadow-2xl text-white font-bold bg-[#1b1717e8] hover:scale-105 transition-all duration-500">
      <CardHeader>
       <div className="icon-container">{props.icon}</div>
        <CardTitle className="text-2xl text-center">{animatedCount+"+"}</CardTitle>
        <CardDescription className="text-center">{props.message}</CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
    </Card>
  )
}
