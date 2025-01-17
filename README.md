
# FinFlow

**FinFlow** is a modern, feature-rich banking platform designed to provide seamless financial management for users. It integrates robust tools for handling user accounts, linking bank accounts, visualizing financial data, and enabling secure transactions, all within a sleek, user-friendly interface.

---

## 🚀 Features

- **User Authentication**: Secure sign-up and sign-in functionality.
- **Bank Account Linking**: Integration with Plaid and Dwolla for easy and secure bank account linking.
- **Financial Data Visualization**: Real-time charts and progress tracking using `chart.js` and `react-chartjs-2`.
- **Dynamic Error Handling**: Comprehensive error handling with `react-toastify` notifications.
- **Responsive UI**: Built with TailwindCSS for a sleek, mobile-friendly design.
- **Accessibility**: Utilizes Radix UI components for enhanced accessibility and interactivity.
- **Secure API Integration**: Powered by Appwrite, Plaid, and Dwolla for managing user data and financial operations.
- **Type Safety**: Fully typed with TypeScript and Zod schema validation.
- **Monitoring**: Error and performance monitoring via Sentry.

---

## 📋 Requirements

Before running the application, ensure you have the following installed:

- **Node.js**: `>=20.x`
- **Appwrite**: Backend instance for managing user accounts and data.
- **Plaid and Dwolla Credentials**: API keys for financial integrations.

---

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/finflow.git
   cd finflow
   ```

2. Install dependencies:
   ```bash
   yarn
   ```

3. Create an `.env.local` file in the root directory and add the following environment variables:
   ```env
   APPWRITE_PROJECT_ID=your_appwrite_project_id
   APPWRITE_ENDPOINT=your_appwrite_endpoint
   APPWRITE_API_KEY=your_appwrite_api_key

   PLAID_CLIENT_ID=your_plaid_client_id
   PLAID_SECRET=your_plaid_secret
   PLAID_ENV=sandbox # or development/production

   DWOLLA_API_KEY=your_dwolla_api_key
   DWOLLA_API_SECRET=your_dwolla_api_secret
   ```

4. Start the development server:
   ```bash
   yarn dev
   ```

5. Visit the application at [http://localhost:3000](http://localhost:3000) or [vercel](https://finflow-two.vercel.app) for the deployed version.

---

## 📦 Scripts

The following scripts are available in `package.json`:

| Script        | Description                     |
|---------------|---------------------------------|
| `dev`         | Runs the application in development mode. |
| `build`       | Builds the application for production. |
| `start`       | Starts the application in production mode. |
| `lint`        | Runs ESLint for code linting.   |

---

## 🔧 Tech Stack

### Core Frameworks & Libraries
- **Next.js 14**: The React framework for production-grade applications.
- **React 18**: Frontend UI development.
- **TailwindCSS 3**: Utility-first CSS framework for responsive design.
- **TypeScript**: Type-safe development.

### Financial Integrations
- **Plaid**: For linking bank accounts and fetching financial data.
- **Dwolla**: For managing ACH payments and funding sources.

### State Management
- **React Hook Form**: Simplified form handling.
- **Zod**: Schema validation for form and API inputs.

### Data Visualization
- **Chart.js & react-chartjs-2**: Interactive charts for financial insights.

### Notifications & Feedback
- **React Toastify**: Toast notifications for success and error messages.

---

## 🌟 Key Dependencies

| Dependency               | Purpose                                      |
|--------------------------|----------------------------------------------|
| `@radix-ui/react-*`      | Accessible and modular UI components.       |
| `chart.js`               | Visualization library for financial data.   |
| `lucide-react`           | Icon set for modern design elements.        |
| `node-appwrite`          | Appwrite SDK for backend interactions.      |
| `plaid`                  | Plaid API integration.                      |
| `react-hook-form`        | Form handling and validation.               |
| `react-toastify`         | Toast notifications.                        |
| `tailwindcss`            | CSS framework for responsive UI.            |
| `zod`                    | Schema validation for TypeScript.           |

---

## 🛡️ Security

- **Cookies**: Securely manage sessions with HTTP-only cookies.
- **Environment Variables**: Sensitive credentials are stored securely in `.env.local`.
- **Sentry Integration**: Real-time error tracking and performance monitoring.

---

## 💡 Future Enhancements

- **Dark Mode**: Implement dark theme support.
- **Budget Tracking**: Advanced tools for tracking monthly expenses and savings.
- **Push Notifications**: Notify users about financial updates and reminders.
- **Multi-Language Support**: Add localization for global users.

---

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---