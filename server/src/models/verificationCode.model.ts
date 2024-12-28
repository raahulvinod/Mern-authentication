import mongoose from 'mongoose';
import verificationCodeType from '../constants/verificationCodeTypes';

export interface VerificationCodeDocument extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  type: verificationCodeType;
  expiresAt: Date;
  createdAt: Date;
}

const verificationCodeSchema = new mongoose.Schema<VerificationCodeDocument>({
  userId: {
    ref: 'User',
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    index: true,
  },
  type: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  expiresAt: { type: Date, required: true },
});

const varificationCodeModel = mongoose.model<VerificationCodeDocument>(
  'VerificationCode',
  verificationCodeSchema,
  'verification_codes'
);

export default varificationCodeModel;
