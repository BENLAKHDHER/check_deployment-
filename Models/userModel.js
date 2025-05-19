import mongoose from "mongoose";

const userSchema= mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    age: { type: Number },
    profilImage:{type: String, default: 
        "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid&w=740"},
    password: {type: String, required: true},
},
{timeStamps: true}
);

export default mongoose.model("User", userSchema);