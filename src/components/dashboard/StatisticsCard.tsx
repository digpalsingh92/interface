import React from 'react'
import { Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { LucideProps } from 'lucide-react';


export interface StatisticsCardProps {
  title: string
  value: number
  Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  color: string
}
export default function StatisticsCard ({title, value, Icon, color}: StatisticsCardProps) {
  return (
    <Card className={`w-[350px] ${color}`}>
      {/* <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader> */}
      <CardContent>
        <h2 className='p-2 font-bold'>{title}</h2>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="secondary" className='flex items-center'>View details<ArrowRight/></Button>
      </CardFooter>
    </Card>
  )
}
