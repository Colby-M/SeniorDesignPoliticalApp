import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://khhttyoarcfarzqytmnv.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoaHR0eW9hcmNmYXJ6cXl0bW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0OTAwMzMsImV4cCI6MjAwOTA2NjAzM30.y1Nr5NkhRSXYCcVucSBLRP4yHxdNpkgVSFvRsPl9N0s')