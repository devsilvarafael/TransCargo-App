"use client";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactNode } from "react";

export default function QueryProvider({ children }: { children: ReactNode }){
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}