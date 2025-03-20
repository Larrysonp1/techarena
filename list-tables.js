// Simple script to list all tables from Supabase
import { createClient } from '@supabase/supabase-js';

// Using env variables from .env
const supabaseUrl = 'https://koysejvmndkihgeeginh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtveXNlanZtbmRraWhnZWVnaW5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3MTI4MDksImV4cCI6MjA1NzI4ODgwOX0.r8PzR0a-x-Pnjjpa-Zz9Y91t7CgJ5aBgiEUdsE8LvaE';

const supabase = createClient(supabaseUrl, supabaseKey);

// List of known tables from setup files
const knownTables = [
  'contact_messages',
  'notification_settings'
];

async function verifyTables() {
  console.log('Verifying known Supabase tables:');
  
  for (const tableName of knownTables) {
    try {
      // Just try to select a single row to confirm table exists
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .limit(1);
      
      if (error) {
        console.log(`- ${tableName}: ERROR - ${error.message}`);
      } else {
        console.log(`- ${tableName}: EXISTS (${data.length} rows found in sample)`);
        
        // Get column information by inspecting first record
        if (data && data.length > 0) {
          console.log(`  Columns: ${Object.keys(data[0]).join(', ')}`);
        }
      }
    } catch (err) {
      console.error(`Error checking table ${tableName}:`, err);
    }
  }
}

verifyTables(); 