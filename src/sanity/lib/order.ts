'use client';
import { client } from "./client";

export async function fetchOrders() {
  return await client.fetch('*[_type == "orders"]');
}