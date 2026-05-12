"use client";
import { useState } from "react";
import { HiSearch, HiPaperAirplane, HiPaperClip, HiDotsVertical, HiPhone, HiVideoCamera } from "react-icons/hi";
import Card from "@/components/ui/Card";
import Avatar from "@/components/ui/Avatar";
import Badge from "@/components/ui/Badge";

export default function Messages() {
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

  return (
    <div className="h-[calc(100vh-160px)] flex gap-6 overflow-hidden">
      {/* Sidebar List */}
      <Card className="w-80 flex flex-col p-0 overflow-hidden shrink-0">
        <div className="p-4 border-b border-border">
          <h2 className="text-xl font-black mb-4">Messages</h2>
          <div className="relative">
            <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
            <input 
              type="text" 
              placeholder="Rechercher..." 
              className="w-full bg-background border border-border rounded-xl py-2 pl-9 pr-4 text-sm outline-none focus:border-primary"
            />
          </div>
        </div>
        <div className="flex-grow overflow-y-auto">
          {conversations.map((chat) => (
            <div 
              key={chat.id}
              onClick={() => setActiveChat(chat.id)}
              className={`
                flex items-center gap-3 p-4 cursor-pointer transition-all border-l-4
                ${activeChat === chat.id 
                  ? "bg-primary/5 border-primary" 
                  : "border-transparent hover:bg-foreground/5"}
              `}
            >
              <div className="relative">
                <Avatar src={chat.avatar} alt={chat.name} size="sm" />
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-success border-2 border-card rounded-full" />
                )}
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex justify-between items-center mb-0.5">
                  <h4 className="font-bold text-sm truncate">{chat.name}</h4>
                  <span className="text-[10px] text-foreground/40 font-bold">{chat.time}</span>
                </div>
                <p className="text-xs text-foreground/60 truncate">{chat.lastMsg}</p>
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
      <Card className="flex-grow flex flex-col p-0 overflow-hidden shadow-2xl">
        {/* Chat Header */}
        <div className="p-4 border-b border-border flex items-center justify-between bg-card/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Avatar src={conversations.find(c => c.id === activeChat)?.avatar} size="sm" />
            <div>
              <h3 className="font-black text-sm">{conversations.find(c => c.id === activeChat)?.name}</h3>
              <p className="text-[10px] text-success font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-success rounded-full" /> En ligne
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-primary/10 rounded-lg text-foreground/40 hover:text-primary transition-all">
              <HiPhone size={20} />
            </button>
            <button className="p-2 hover:bg-primary/10 rounded-lg text-foreground/40 hover:text-primary transition-all">
              <HiVideoCamera size={20} />
            </button>
            <button className="p-2 hover:bg-primary/10 rounded-lg text-foreground/40 hover:text-primary transition-all">
              <HiDotsVertical size={20} />
            </button>
          </div>
        </div>

        {/* Messages Thread */}
        <div className="flex-grow p-6 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] dark:bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] bg-opacity-5 space-y-4">
          {messages.map((msg) => (
            <div 
              key={msg.id}
              className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div className={`
                max-w-[70%] p-4 rounded-2xl shadow-sm
                ${msg.sender === "me" 
                  ? "bg-primary text-white rounded-br-none" 
                  : "bg-card border border-border text-foreground rounded-bl-none"}
              `}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <span className={`text-[10px] mt-2 block font-bold opacity-50 ${msg.sender === "me" ? "text-right" : "text-left"}`}>
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-border bg-card">
          <form className="flex items-center gap-3">
            <button type="button" className="p-2 hover:bg-primary/10 rounded-xl text-foreground/40 hover:text-primary transition-all">
              <HiPaperClip size={22} />
            </button>
            <div className="flex-grow relative">
              <input 
                type="text" 
                placeholder="Écrivez votre message..." 
                className="w-full bg-background border-2 border-border rounded-xl py-3 px-4 text-sm outline-none focus:border-primary transition-all"
              />
            </div>
            <button type="submit" className="p-3 bg-primary text-white rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all">
              <HiPaperAirplane size={22} className="rotate-90" />
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
}
