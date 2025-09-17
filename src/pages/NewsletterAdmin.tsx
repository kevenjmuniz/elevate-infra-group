import React, { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Mail, Search, Trash2, Download, Users } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface NewsletterSubscriber {
  id: string;
  email: string;
  name: string | null;
  subscribed_at: string;
  is_active: boolean;
}

const NewsletterAdmin = () => {
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchSubscribers = async () => {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .order('subscribed_at', { ascending: false });

      if (error) throw error;
      setSubscribers(data || []);
    } catch (error) {
      console.error('Erro ao buscar assinantes:', error);
      toast({
        title: "Erro",
        description: "Não foi possível carregar os assinantes.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const handleDeleteSubscriber = async (id: string) => {
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setSubscribers(prev => prev.filter(sub => sub.id !== id));
      toast({
        title: "Assinante removido",
        description: "O assinante foi removido com sucesso.",
      });
    } catch (error) {
      console.error('Erro ao deletar assinante:', error);
      toast({
        title: "Erro",
        description: "Não foi possível remover o assinante.",
        variant: "destructive"
      });
    }
  };

  const handleToggleStatus = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .update({ is_active: !currentStatus })
        .eq('id', id);

      if (error) throw error;

      setSubscribers(prev => 
        prev.map(sub => 
          sub.id === id ? { ...sub, is_active: !currentStatus } : sub
        )
      );

      toast({
        title: "Status atualizado",
        description: `Assinante ${!currentStatus ? 'ativado' : 'desativado'} com sucesso.`,
      });
    } catch (error) {
      console.error('Erro ao atualizar status:', error);
      toast({
        title: "Erro",
        description: "Não foi possível atualizar o status.",
        variant: "destructive"
      });
    }
  };

  const exportEmails = () => {
    const activeEmails = subscribers
      .filter(sub => sub.is_active)
      .map(sub => sub.email)
      .join('\n');
    
    const blob = new Blob([activeEmails], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'newsletter-emails.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Emails exportados",
      description: "Lista de emails foi baixada com sucesso.",
    });
  };

  const filteredSubscribers = subscribers.filter(sub =>
    sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (sub.name && sub.name.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const activeSubscribers = subscribers.filter(sub => sub.is_active).length;
  const totalSubscribers = subscribers.length;

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Gerenciar Newsletter</h1>
          <p className="text-muted-foreground">Gerencie os assinantes da sua newsletter</p>
        </div>
        <Button onClick={exportEmails} variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Exportar Emails
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Assinantes</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalSubscribers}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Assinantes Ativos</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeSubscribers}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Ativação</CardTitle>
            <Badge variant="secondary">%</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {totalSubscribers > 0 ? Math.round((activeSubscribers / totalSubscribers) * 100) : 0}%
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Lista de Assinantes</CardTitle>
          <CardDescription>
            Gerencie todos os assinantes da newsletter
          </CardDescription>
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por email ou nome..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Data de Inscrição</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubscribers.map((subscriber) => (
                <TableRow key={subscriber.id}>
                  <TableCell className="font-medium">{subscriber.email}</TableCell>
                  <TableCell>{subscriber.name || '-'}</TableCell>
                  <TableCell>
                    {format(new Date(subscriber.subscribed_at), 'dd/MM/yyyy HH:mm', { locale: ptBR })}
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={subscriber.is_active ? "default" : "secondary"}
                      className="cursor-pointer"
                      onClick={() => handleToggleStatus(subscriber.id, subscriber.is_active)}
                    >
                      {subscriber.is_active ? 'Ativo' : 'Inativo'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Remover Assinante</AlertDialogTitle>
                          <AlertDialogDescription>
                            Tem certeza que deseja remover este assinante? Esta ação não pode ser desfeita.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction onClick={() => handleDeleteSubscriber(subscriber.id)}>
                            Remover
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {filteredSubscribers.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              {searchTerm ? 'Nenhum assinante encontrado com esse termo.' : 'Nenhum assinante cadastrado ainda.'}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default NewsletterAdmin;