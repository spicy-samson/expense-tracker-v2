import * as React from "react"

// Function to format date
const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export function HomePage(){
  // Get the current date
  const currentDate = new Date();
  return(
    <div>
    <h1>h</h1>
    <h2>Current Date</h2>
         <p>{formatDate(currentDate)}</p>
     
    </div>
  )
}