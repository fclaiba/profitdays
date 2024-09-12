import React from "react";
import { AcordeonServicios } from "@/components/acordeon-servicios";
import { SimpleFooter } from "@/components/simple-footer";
import { NotificationBanner } from "@/components/notification-banner";

export default function Home() {
  return (
    <div>
      <NotificationBanner />
      <AcordeonServicios />
      <SimpleFooter />
    </div>
  );
}