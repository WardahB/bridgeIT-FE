// student/layout.tsx

"use client";
import React, { useEffect, useState } from "react";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import NavBar from "./stdcomps/NavBar"; // Adjust the import path
import ChatWidget from "../chat/ChatWidget";

interface UserProfile {
  userId: string;
  firstName: string;
  lastName: string;
  role: string;
  imageData: string;
}

const StudentLayout = ({ children }: { children: ReactNode }) => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUserProfile() {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        router.push("/auth/login-user");
        return;
      }

      try {
        // Fetch User Profile
        const profileResponse = await fetch(
          "https://localhost:7053/api/auth/authorized-user-info",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (profileResponse.ok) {
          const profileData = await profileResponse.json();
          const userId = profileData.userId;

          // Fetch Student Data
          const studentResponse = await fetch(
            `https://localhost:7053/api/get-student/student-by-id/${userId}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (studentResponse.ok) {
            const studentData = await studentResponse.json();

            setUserProfile({
              userId: studentData.userId,
              firstName: studentData.firstName,
              lastName: studentData.lastName,
              role: profileData.role,
              imageData: studentData.imageData,
            });
          } else {
            console.error("Failed to fetch student profile.");
            router.push("/unauthorized");
          }
        } else {
          console.error("Failed to fetch user profile.");
          router.push("/unauthorized");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        router.push("/unauthorized");
      }
    }

    fetchUserProfile();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    router.push("/auth/login-user");
  };

  if (!userProfile) {
    // You can return a loading indicator here if you prefer
    return null;
  }

  return (
    <div>
      {/* Navbar on top */}
      <NavBar userProfile={userProfile} onLogout={handleLogout} />
      <div className="pt-16"> {/* pt-16 ensures content is below the navbar */}
        <main>{children}</main>
      </div>
      <ChatWidget />
    </div>
  );
};

export default StudentLayout;