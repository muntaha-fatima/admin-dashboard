"use client";

import { useEffect, useState } from "react";
import {fetchCategories, createCategory, deleteCategory} from "../../lib/api";
import {Card,CardContent, CardHeader,CardTitle,} from "../../components/ui/card";
import {Button} from "../../components/ui/button"
import {Input,} from "../../components/ui/input"
import {Label} from "../../components/ui/label"





import { toast } from "sonner";

export default function CategoriesPage() {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    description: "",
    icon: "",
    order: 0,
    active: true,
  });

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    setLoading(true);
    try {
      const res = await fetchCategories();
      setCategories(res.categories || []);
    } catch (err) {
      toast.error("Failed to fetch categories.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCreate() {
    if (!token) return toast.error("Token not found!");

    try {
      await createCategory(form, token);
      toast.success("Category created!");
      setForm({
        name: "",
        description: "",
        icon: "",
        order: 0,
        active: true,
      });
      await loadCategories();
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Error creating category.");
    }
  }

  async function handleDelete(id: string) {
    if (!token) return toast.error("Token not found!");
    try {
      await deleteCategory(id, token);
      toast.success("Category deleted.");
      await loadCategories();
    } catch (err) {
      toast.error("Failed to delete category.");
    }
  }

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create Category</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Name</Label>
              <Input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>
            <div>
              <Label>Icon URL</Label>
              <Input
                value={form.icon}
                onChange={(e) => setForm({ ...form, icon: e.target.value })}
              />
            </div>
            <div>
              <Label>Order</Label>
              <Input
                type="number"
                value={form.order}
                onChange={(e) => setForm({ ...form, order: Number(e.target.value) })}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <Button onClick={handleCreate}>Create</Button>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <Card key={cat._id}>
                <CardHeader>
                  <CardTitle>{cat.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>{cat.description}</p>
                  {cat.icon && (
                    <img src={cat.icon} alt="icon" className="w-10 h-10" />
                  )}
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(cat._id)}
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
