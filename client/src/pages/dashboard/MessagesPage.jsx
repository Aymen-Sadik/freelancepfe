import { useState } from "react";
import { HiSearch, HiPaperAirplane, HiPaperClip, HiPhone, HiVideoCamera, HiDotsVertical } from "react-icons/hi";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";

export default function MessagesPage() {
  const [activeChat, setActiveChat] = useState(1);

  const conversations = [
    { id: 1, name: "Amine Bennani", lastMsg: "On commence quand le projet ?", time: "14:30", unread: 2, online: true, avatar: "https://i.pravatar.cc/150?u=amine" },
    { id: 2, name: "Sara Mansouri", lastMsg: "Les maquettes sont prêtes.", time: "Hier", unread: 0, online: false, avatar: "https://i.pravatar.cc/150?u=sara" },
    { id: 3, name: "Laila Rouissi", lastMsg: "Merci pour votre retour.", time: "Lun", unread: 0, online: true, avatar: "https://i.pravatar.cc/150?u=laila" },
  ];

  const messages = [
    { id: 1, text: "Bonjour Amine, j'ai bien reçu votre demande.", sender: "me", time: "14:15" },
    { id: 2, text: "C'est parfait. Pourriez-vous me dire si le délai de 5 jours est maintenu ?", sender: "them", time: "14:20" },
    { id: 3, text: "Oui, absolument. On commence dès que vous validez le devis.", sender: "me", time: "14:25" },
    { id: 4, text: "On commence quand le projet ?", sender: "them", time: "14:30" },
  ];

  const activeConv = conversations.find(c => c.id === activeChat);

  return (
    <div className="h-[calc(100vh-160px)] flex gap-6 overflow-hidden">
      {/* Sidebar List */}
      <Card className="w-80 flex flex-col p-0 overflow-hidden shrink-0" hover={false}>
        <div className="p-4" style={{ borderBottom: "1px solid var(--border)" }}>
          <h2 className="text-xl font-black mb-4" style={{ color: "var(--foreground)" }}>Messages</h2>
          <div className="relative">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--foreground)", opacity: 0.4 }} />
            <input type="text" placeholder="Rechercher..."
              className="w-full rounded-xl py-2 pl-9 pr-4 text-sm outline-none transition-all"
              style={{ backgroundColor: "var(--background)", border: "1px solid var(--border)", color: "var(--foreground)" }}
              onFocus={e => e.target.style.borderColor = "#0EA5E9"}
              onBlur={e => e.target.style.borderColor = "var(--border)"}
            />
          </div>
        </div>
        <div className="flex-grow overflow-y-auto">
          {conversations.map((chat) => (
            <div key={chat.id} onClick={() => setActiveChat(chat.id)}
              className="flex items-center gap-3 p-4 cursor-pointer transition-all"
              style={{
                borderLeft: `4px solid ${activeChat === chat.id ? "#0EA5E9" : "transparent"}`,
                backgroundColor: activeChat === chat.id ? "rgba(14,165,233,0.05)" : "transparent",
              }}>
              <div className="relative">
                <Avatar src={chat.avatar} alt={chat.name} size="sm" />
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2" style={{ backgroundColor: "#10B981", borderColor: "var(--card)" }} />
                )}
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex justify-between items-center mb-0.5">
                  <h4 className="font-bold text-sm truncate" style={{ color: "var(--foreground)" }}>{chat.name}</h4>
                  <span className="text-[10px] font-bold" style={{ color: "var(--foreground)", opacity: 0.4 }}>{chat.time}</span>
                </div>
                <p className="text-xs truncate" style={{ color: "var(--foreground)", opacity: 0.6 }}>{chat.lastMsg}</p>
              </div>
              {chat.unread > 0 && (
                <Badge variant="primary" className="h-5 w-5 flex items-center justify-center p-0 rounded-full text-[10px]">
                  {chat.unread}
                </Badge>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Chat Area */}
      <Card className="flex-grow flex flex-col p-0 overflow-hidden shadow-2xl" hover={false}>
        {/* Header */}
        <div className="p-4 flex items-center justify-between" style={{ borderBottom: "1px solid var(--border)", backgroundColor: "rgba(var(--card),0.5)", backdropFilter: "blur(8px)" }}>
          <div className="flex items-center gap-3">
            <Avatar src={activeConv?.avatar} size="sm" />
            <div>
              <h3 className="font-black text-sm" style={{ color: "var(--foreground)" }}>{activeConv?.name}</h3>
              <p className="text-[10px] font-bold flex items-center gap-1" style={{ color: "#10B981" }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: "#10B981" }} /> En ligne
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {[HiPhone, HiVideoCamera, HiDotsVertical].map((Icon, i) => (
              <button key={i} className="p-2 rounded-lg transition-all"
                style={{ color: "var(--foreground)", opacity: 0.4 }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(14,165,233,0.1)"; e.currentTarget.style.opacity = 1; e.currentTarget.style.color = "#0EA5E9"; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.opacity = 0.4; e.currentTarget.style.color = "var(--foreground)"; }}>
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-grow p-6 overflow-y-auto space-y-4" style={{ backgroundColor: "var(--background)" }}>
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
              <div className="max-w-[70%] p-4 rounded-2xl shadow-sm"
                style={{
                  backgroundColor: msg.sender === "me" ? "#0EA5E9" : "var(--card)",
                  color: msg.sender === "me" ? "#fff" : "var(--foreground)",
                  border: msg.sender === "me" ? "none" : "1px solid var(--border)",
                  borderBottomRightRadius: msg.sender === "me" ? "0" : "1rem",
                  borderBottomLeftRadius: msg.sender === "me" ? "1rem" : "0",
                }}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <span className="text-[10px] mt-2 block font-bold opacity-50">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4" style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--card)" }}>
          <form className="flex items-center gap-3" onSubmit={e => e.preventDefault()}>
            <button type="button" className="p-2 rounded-xl transition-all"
              style={{ color: "var(--foreground)", opacity: 0.4 }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = "rgba(14,165,233,0.1)"; e.currentTarget.style.color = "#0EA5E9"; e.currentTarget.style.opacity = 1; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--foreground)"; e.currentTarget.style.opacity = 0.4; }}>
              <HiPaperClip size={22} />
            </button>
            <input type="text" placeholder="Écrivez votre message..."
              className="flex-grow rounded-xl py-3 px-4 text-sm outline-none transition-all"
              style={{ backgroundColor: "var(--background)", border: "2px solid var(--border)", color: "var(--foreground)" }}
              onFocus={e => e.target.style.borderColor = "#0EA5E9"}
              onBlur={e => e.target.style.borderColor = "var(--border)"}
            />
            <button type="submit" className="p-3 text-white rounded-xl transition-all hover:opacity-90"
              style={{ backgroundColor: "#0EA5E9", boxShadow: "0 4px 14px rgba(14,165,233,0.3)" }}>
              <HiPaperAirplane size={22} className="rotate-90" />
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
}
