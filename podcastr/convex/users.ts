import { internalMutation } from "./_generated/server";
import {v} from "convex/values";

export const createUser = internalMutation({
    args: {
        email: v.string(),
        imageUrl: v.string(),
        clerkId: v.string(),
        name: v.string(),
    },
  handler: async(ctx, args) => {
    await ctx.db.insert('users', {
        email: args.email,
        imageUrl: args.imageUrl,
        clerkId: args.clerkId,
        name: args.name,
    })
  }
    });
