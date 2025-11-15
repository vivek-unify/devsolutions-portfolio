import { redirect } from 'next/navigation'
import { createClient } from "@/lib/supabase/server"
import { AdminDashboardClient } from "@/components/admin/admin-dashboard-client"

export default async function AdminDashboardPage() {
  const supabase = await createClient()

  const { data: { user }, error: userError } = await supabase.auth.getUser()
  
  if (userError || !user) {
    redirect("/admin/login")
  }

  // Verify admin profile exists
  const { data: adminProfile, error: profileError } = await supabase
    .from('admin_profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (profileError || !adminProfile) {
    await supabase.auth.signOut()
    redirect("/admin/login")
  }

  // Fetch all client submissions
  const { data: clients, error: clientsError } = await supabase
    .from('clients')
    .select('*')
    .order('created_at', { ascending: false })

  if (clientsError) {
    console.error('Error fetching clients:', clientsError)
  }

  return (
    <AdminDashboardClient 
      initialClients={clients || []} 
      adminProfile={adminProfile}
    />
  )
}
