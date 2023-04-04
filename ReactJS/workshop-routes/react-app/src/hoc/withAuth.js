
export function withAuth(Component){
    // const authContext = useAuthContext();
    function WrapperHOC(props) {
        return <Component {...props} /*auth={authContext}*/ />
    }
    return WrapperHOC
}