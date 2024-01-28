import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
const CheckPolicy = () => {
    return (
        <div>
            <div className="flex items-center space-x-2 mt-1">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <small className="tracking-tight first:mt-0">
                Check our{" "}
                <a
                    href="#"
                    className="font-medium text-primary underline underline-offset-4"
                >
                    Terms agree
                </a>{" "}
                and{" "}
                <a
                    href="#"
                    className="font-medium text-primary underline underline-offset-4"
                >
                    Privacy Policy
                </a>
            </small>
        </div>
    )
}

export default CheckPolicy
