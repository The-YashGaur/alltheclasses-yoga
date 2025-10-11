const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const submitContactForm = async (formData: {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}) => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};
