import Counter from "./components/Counter";
import AddBlog from "./components/AddBlog";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import ToDo from "./components/ToDo";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

export const routes = [
    {
        path: '',
        name: 'login',
        component: Login
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: SignUp
    },
    {
        path: '/counter',
        name: 'counter',
        component: Counter
    },
    {
        path: '/add-blog',
        name: 'addBlog',
        component: AddBlog,
    },
    {
        path: '/blogs',
        name: 'blogs',
        component: Blogs
    },
    {
        path: '/blog/:blog_id',
        name: 'blog',
        component: Blog
    },
    {
        path: '/todo',
        name: 'todo',
        component: ToDo
    }

]