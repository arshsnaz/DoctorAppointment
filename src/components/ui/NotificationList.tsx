import React, { useEffect, useState } from "react";

interface Notification {
  id: number;
  message: string;
  createdAt: string;
  read: boolean;
}

interface NotificationListProps {
  recipientType: "USER" | "DOCTOR";
  token: string;
}

const NotificationList: React.FC<NotificationListProps> = ({ recipientType, token }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    fetch(`/api/notifications?recipientType=${recipientType}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then(setNotifications);
  }, [recipientType, token]);

  return (
    <div>
      <h3>Notifications</h3>
      <ul>
        {notifications.map((n) => (
          <li key={n.id} style={{ fontWeight: n.read ? "normal" : "bold" }}>
            {n.message} <span style={{ fontSize: 12, color: "#888" }}>{new Date(n.createdAt).toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationList;
