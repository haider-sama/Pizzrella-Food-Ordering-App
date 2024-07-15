'use client';
import UserForm from "@/components/layout/UserForm";
import UserTabs from "@/components/layout/UserTabs";
import {useProfile} from "@/components/UseProfile";
import {useParams} from "next/navigation";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";

/**
 * EditUserPage Component
 * This component represents the page for editing user profiles.
 */
export default function EditUserPage() {
  const {loading, data} = useProfile();     // Destructuring the loading and data properties from the useProfile hook 
  const [user, setUser] = useState(null);   // State variable for storing user data
  const {id} = useParams();     // Destructuring the id parameter from the URL using the useParams hook

// Fetching user data based on the user id when the component mounts
  useEffect(() => {
    fetch('/api/profile?_id='+id).then(res => {
      res.json().then(user => {
        setUser(user);  // Setting the fetched user data to the state variable
      });
    })
  }, []);   // Empty dependency array to ensure the effect runs only once after initial render

  async function handleSaveButtonClick(ev, data) {
    ev.preventDefault();    // Preventing the default form submission behavior
    const promise = new Promise(async (resolve, reject) => {
      const res = await fetch('/api/profile', {
        method: 'PUT',  // Using PUT method for updating user data
        headers: {'Content-Type': 'application/json'},  // Specifying the content type as JSON
        body: JSON.stringify({...data,_id:id}),     // Stringifying the user data along with the user id
      });
      if (res.ok)
        resolve();  // Resolving the promise if the request is successful
      else
        reject();   // Rejecting the promise if the request fails
    });
    // Displaying a toast notification while waiting for the promise to resolve
    await toast.promise(promise, {
      loading: 'Saving user...',        // Loading message while the request is being processed
      success: 'User saved',            // Success message if the request is successful
      error: 'Something went wrong',    // Error message if the request fails
    });
  }

  // Conditional rendering based on loading state and user admin status
  if (loading) {
    return 'Loading user profile...';   // Render a loading message if user profile is still loading
  }
  if (!data.admin) {
    return 'Not an admin';  // Render a message if the user is not an admin
  }

    // Render the edit user page with user form
  return (
    <section className="mt-8 mx-auto max-w-2xl">
      <UserTabs isAdmin={true} />
      <div className="mt-8">
        <UserForm user={user} onSave={handleSaveButtonClick} />
      </div>
    </section>
  );
}