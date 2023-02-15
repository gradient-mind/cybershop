import mongoose, { Document, Schema } from "mongoose";

export interface IRole {
    name: string,
    priority: number
}

export interface IRoleModel extends IRole, Document {}

const RoleSchema: Schema = new Schema(
{
    name: { type: String, required: true }
}, 
{ 
    versionKey: false, timestamps: true 
});

export default mongoose.model<IRoleModel>('Role', RoleSchema);