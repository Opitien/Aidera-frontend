import { FileText, MessageCircle, Activity, Shield } from "lucide-react";

export const features = [
  {
    icon: FileText,
    title: "Medical Document Analysis",
    description: "Upload lab results, prescriptions, or medical reports and receive clear, easy-to-understand explanations of what they mean.",
  },
  {
    icon: MessageCircle,
    title: "Health Q&A",
    description: "Ask any general health question and get supportive, evidence-informed answers in a calm, conversational tone.",
  },
  {
    icon: Activity,
    title: "Health Data Tracking",
    description: "Keep track of your key health metrics and get AI-powered insights to help you understand trends over time.",
  },
  {
    icon: Shield,
    title: "AI-Supported Guidance",
    description: "Receive thoughtful, personalized health guidance while always being encouraged to consult a licensed professional.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Ask or Upload",
    description: "Type your health question or upload a medical document you'd like help understanding.",
  },
  {
    number: "02",
    title: "AI Analyzes",
    description: "Aidera's AI processes your input and generates a clear, empathetic, and informative response.",
  },
  {
    number: "03",
    title: "Get Clear Guidance",
    description: "Receive easy-to-understand health insights with appropriate context and disclaimers.",
  },
];

export const faqs = [
  {
    question: "What is Aidera?",
    answer: "Aidera is an AI-powered health assistant that helps you understand medical documents, answers general health questions, and provides supportive guidance — all in one calm, easy-to-use interface.",
  },
  {
    question: "Does Aidera replace a doctor?",
    answer: "No. Aidera provides general health information and AI-generated insights to help you better understand your health. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for medical decisions.",
  },
  {
    question: "Is my data safe?",
    answer: "Absolutely. Aidera is built with a privacy-first design. Your data is encrypted, never shared with third parties, and you remain in control of your information at all times.",
  },
  {
    question: "What kind of documents can I upload?",
    answer: "You can upload lab results, prescriptions, discharge summaries, imaging reports, and other common medical documents. Aidera will help explain the contents in plain language.",
  },
];

export const mockChatMessages = [
  {
    id: "1",
    role: "assistant" as const,
    content: "Hello! I'm Aidera, your AI health assistant. I'm here to help you understand medical information, answer general health questions, and provide supportive guidance.\n\nHow can I help you today?",
    timestamp: new Date(Date.now() - 60000),
  },
];

export const mockAIResponses = [
  "That's a great question. Based on general medical knowledge, here's what I can share:\n\nThis is a common concern, and it's important to monitor how you're feeling. If symptoms persist for more than a few days, I'd recommend scheduling a visit with your healthcare provider for a proper evaluation.\n\n*Please remember that this is general guidance and not a medical diagnosis. Always consult a licensed healthcare professional for personalized advice.*",
  "Thank you for sharing that. Let me help you understand this better.\n\nThe information you've described is quite common and typically not a cause for immediate concern. However, everyone's health situation is unique.\n\nHere are a few things to consider:\n- **Stay hydrated** and maintain a balanced diet\n- **Monitor your symptoms** and note any changes\n- **Rest** when your body tells you to\n\nIf you're feeling worried, there's no harm in reaching out to your doctor. They can provide personalized guidance based on your medical history.\n\n*This is AI-generated health information, not a medical diagnosis.*",
  "I understand your concern. Here's a general overview:\n\nThis type of result is often within normal ranges, but interpretation depends on many factors including your age, medical history, and other lab values.\n\n**What this typically means:**\n- Values in this range are generally considered normal for most adults\n- Slight variations are common and usually not clinically significant\n- Your doctor will look at the full picture, not just one number\n\nI'd encourage you to discuss these results with your healthcare provider during your next appointment. They can give you the most accurate interpretation.\n\n*Remember: Aidera provides general health guidance and does not replace professional medical advice.*",
];
