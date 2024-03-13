export default function LoginPage() {
    return(
        <form className="login">
            <h1>Login</h1>
            <input type="text" placeholder="username" required />
            <input type="email" placeholder="email" required />
            <input type="password" placeholder="password" required />
            <button>Login</button>
        </form>
    );
}