CREATE TABLE avocados (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT NOT NULL,
    name TEXT NOT NULL,
    purchase_date DATE NOT NULL,
    firmness TEXT NOT NULL,
    storage_location TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- / SQL queries used to generate table.