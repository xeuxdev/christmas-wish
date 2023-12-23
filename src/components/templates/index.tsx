"use client"

import React from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EmptyTemplates from "./empty-templates"
import PreDefinedTemplates from "./pre-defined-templates"

export default function TemplatesTab() {
  return (
    <Tabs defaultValue="empty">
      <TabsList className="flex mx-auto w-[200px] mb-10">
        <TabsTrigger value="empty">Empty</TabsTrigger>
        <TabsTrigger value="predefined">Pre-defined</TabsTrigger>
      </TabsList>
      <TabsContent value="empty">
        <EmptyTemplates />
      </TabsContent>
      <TabsContent value="predefined">
        <PreDefinedTemplates />
      </TabsContent>
    </Tabs>
  )
}
