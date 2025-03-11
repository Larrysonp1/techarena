import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase, ContactFormData } from '@/lib/supabase';
import { ArrowLeft, Mail, RefreshCw, Check, Eye, Archive } from 'lucide-react';

const MessagesAdmin = () => {
  const [messages, setMessages] = useState<ContactFormData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setMessages(data || []);
    } catch (err) {
      console.error('Error fetching messages:', err);
      setError('Failed to load messages. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const updateMessageStatus = async (id: string, status: 'read' | 'replied' | 'archived') => {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status })
        .eq('id', id);
      
      if (error) throw error;
      
      // Update local state
      setMessages(prevMessages => 
        prevMessages.map(msg => 
          msg.id === id ? { ...msg, status } : msg
        )
      );
    } catch (err) {
      console.error('Error updating message:', err);
      setError('Failed to update message status. Please try again.');
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }).format(date);
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'new': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'read': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'replied': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'archived': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6">
        <div className="flex justify-between items-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-cyber-blue hover:text-cyber-blue/80">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <button 
            onClick={fetchMessages}
            className="inline-flex items-center gap-2 px-3 py-2 bg-cyber-blue/10 text-cyber-blue hover:bg-cyber-blue/20 rounded-md text-sm"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
        </div>
        
        <div className="bg-card border border-border rounded-xl p-6 mb-8 shadow-sm">
          <h1 className="text-2xl font-bold flex items-center gap-2 mb-6">
            <Mail className="h-5 w-5" />
            Contact Messages
          </h1>
          
          {error && (
            <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-4 rounded-md mb-6">
              {error}
            </div>
          )}
          
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyber-blue"></div>
            </div>
          ) : messages.length === 0 ? (
            <div className="text-center py-12 text-foreground/70">
              <Mail className="h-12 w-12 mx-auto mb-3 text-foreground/30" />
              <p>No messages found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="border border-border/60 rounded-lg overflow-hidden">
                  <div className="bg-muted/30 px-4 py-3 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <div>
                      <h3 className="font-medium">{message.subject}</h3>
                      <p className="text-xs text-foreground/70">
                        From: {message.name} &lt;{message.email}&gt;
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(message.status || 'new')}`}>
                        {message.status || 'new'}
                      </span>
                      <span className="text-xs text-foreground/50">
                        {message.created_at && formatDate(message.created_at)}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-card">
                    <p className="whitespace-pre-wrap text-sm">{message.message}</p>
                  </div>
                  <div className="bg-muted/10 px-4 py-2 flex justify-end gap-2">
                    <button 
                      onClick={() => updateMessageStatus(message.id!, 'read')}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 rounded text-xs"
                    >
                      <Eye className="h-3 w-3" />
                      Mark as Read
                    </button>
                    <button 
                      onClick={() => updateMessageStatus(message.id!, 'replied')}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded text-xs"
                    >
                      <Check className="h-3 w-3" />
                      Mark as Replied
                    </button>
                    <button 
                      onClick={() => updateMessageStatus(message.id!, 'archived')}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 rounded text-xs"
                    >
                      <Archive className="h-3 w-3" />
                      Archive
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesAdmin; 