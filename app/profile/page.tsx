// Basic profile page
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: {
    default: 'PROFILE', // a default is required when creating a template
    template: '%s | PROFILE'
    },
  }

export default function ProfilePage() {

    return (
      <p>This will be the profile page</p>
    );
  }