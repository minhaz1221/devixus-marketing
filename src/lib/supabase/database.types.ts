/**
 * Hand-authored to match supabase/migrations/*.sql.
 *
 * Regenerate from the live project once the migrations are applied:
 *   npx supabase gen types typescript --project-id knfwdistjizwcbcioqtd \
 *     > src/lib/supabase/database.types.ts
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      case_studies: {
        Row: {
          id: string;
          slug: string;
          title: string;
          client: string;
          category: string;
          kicker: string | null;
          summary: string | null;
          hero_image: string | null;
          problem: string | null;
          approach: Json;
          outcome: string | null;
          metrics: Json;
          tech_stack: string[];
          testimonial: Json | null;
          order_index: number;
          published: boolean;
          seo_title: string | null;
          seo_description: string | null;
          og_image: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          client: string;
          category: string;
          kicker?: string | null;
          summary?: string | null;
          hero_image?: string | null;
          problem?: string | null;
          approach?: Json;
          outcome?: string | null;
          metrics?: Json;
          tech_stack?: string[];
          testimonial?: Json | null;
          order_index?: number;
          published?: boolean;
          seo_title?: string | null;
          seo_description?: string | null;
          og_image?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["case_studies"]["Insert"]>;
        Relationships: [];
      };
      blog_posts: {
        Row: {
          id: string;
          slug: string;
          title: string;
          excerpt: string | null;
          content_mdx: string;
          cover_image: string | null;
          author: string | null;
          tags: string[];
          published: boolean;
          published_at: string | null;
          reading_minutes: number | null;
          seo_title: string | null;
          seo_description: string | null;
          og_image: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          slug: string;
          title: string;
          excerpt?: string | null;
          content_mdx: string;
          cover_image?: string | null;
          author?: string | null;
          tags?: string[];
          published?: boolean;
          published_at?: string | null;
          reading_minutes?: number | null;
          seo_title?: string | null;
          seo_description?: string | null;
          og_image?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["blog_posts"]["Insert"]>;
        Relationships: [];
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          whatsapp: string | null;
          budget: string | null;
          message: string;
          status: "new" | "read" | "contacted" | "archived" | "spam";
          ip_address: string | null;
          user_agent: string | null;
          turnstile_score: number | null;
          notes: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          whatsapp?: string | null;
          budget?: string | null;
          message: string;
          status?: "new" | "read" | "contacted" | "archived" | "spam";
          ip_address?: string | null;
          user_agent?: string | null;
          turnstile_score?: number | null;
          notes?: string | null;
          created_at?: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["contact_submissions"]["Insert"]
        >;
        Relationships: [];
      };
      admin_audit_log: {
        Row: {
          id: number;
          admin_email: string;
          action: string;
          entity_type: string;
          entity_id: string | null;
          before_data: Json | null;
          after_data: Json | null;
          ip_address: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          admin_email: string;
          action: string;
          entity_type: string;
          entity_id?: string | null;
          before_data?: Json | null;
          after_data?: Json | null;
          ip_address?: string | null;
          created_at?: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["admin_audit_log"]["Insert"]
        >;
        Relationships: [];
      };
    };
    Views: Record<never, never>;
    Functions: {
      is_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
    };
    Enums: Record<never, never>;
    CompositeTypes: Record<never, never>;
  };
}
