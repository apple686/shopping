import { MenuList, TITLE } from "@/lib/constants";
import Link from "next/link";
import { Fragment } from "react";

export default function Header() {
    return (
        <div className="h-16 py-10 border-b bg-[#f8f8f8]">
            <div className="container flex justify-between items-center h-full">
                <h1 className="text-2xl">
                    <Link href="/">{TITLE}</Link>
                </h1>
                <div className="flex justify-end items-center">
                    {MenuList.map((item, i) => (
                        <Fragment key={item.text}>
                        {i !== 0 && <div className="w-px bg-gray-500 m-4 h-4"></div>}
                        <Link href={item.href}>{item.text}</Link>
                        </Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}