import "server-only";

import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database.types";
import { getSupabaseConfig } from "@/lib/supabase/config";

export function createServerSupabaseClient() {
  const { anonKey, url } = getSupabaseConfig();

  if (!url || !anonKey) {
    return null;
  }

  return createClient<Database>(url, anonKey, {
    auth: { persistSession: false },
  });
}

export function createServiceSupabaseClient() {
  const { serviceRoleKey, url } = getSupabaseConfig();

  if (!url || !serviceRoleKey) {
    return null;
  }

  return createClient<Database>(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
