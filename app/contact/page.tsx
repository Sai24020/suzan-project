// Basic about page
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: {
    default: 'CONTACT', // a default is required when creating a template
    template: '%s | CONTACT'
    },
  }

export default function ContactPage() {

    return (
      <p>This will be the contact page</p>
    );
  }