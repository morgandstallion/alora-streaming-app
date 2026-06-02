import { useState } from "react";

const NotificationBanner = () => {
  // const [showbanner, setShowBanner] = useState(false);

  const [dismissed, setDismissed] = useState(
    () => sessionStorage.getItem("notificationBannerDismissed") === "true",
  );

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    // setShowBanner(true);

    sessionStorage.setItem("notificationBannerDismissed", "true");
  };

  return (
    <div
      // hidden={showbanner}
      className="flex justify-between items-center p-4 bg-brand-95/10 px-4"
    >
      <div className="px-4"></div>
      <p className="text-brand-80">
        Dear friend, this application is still in production, some features may
        not work.
      </p>
      <button
        onClick={handleDismiss}
        className="text-white bg-accent-65 rounded-md px-2 cursor-pointer"
      >
        X
      </button>
    </div>
  );
};

export default NotificationBanner;
