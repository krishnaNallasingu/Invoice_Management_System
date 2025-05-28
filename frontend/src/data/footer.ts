import { IMenuItem } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
} = {
    subheading: "Upload files like PDFs, images, or Excel sheets and automatically manage invoices, customers, and products. Powered by AI for fast and accurate data extraction.",
    quickLinks: [
        {
            text: "Github Code Link",
            url: "https://github.com/krishnaNallasingu/Invoice_Management_System"
        },
        {
            text: "Backend Server URL",
            url: "https://swipe-invoice-management.vercel.app/"
        }
    ]
}