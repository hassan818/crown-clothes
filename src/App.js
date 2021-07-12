import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Spinner from "./components/Spinner/Spinner";
import { GlobalStyle } from "./gloable.styles";
import Header from "./components/Header/Header";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from "./Firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCollectionsForPreview } from "./redux/shop/shop.selector";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ShopPage = lazy(() => import("./pages/ShopPage/ShopPage"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/SignInAndSignUp/SignInAndSignUp")
);
const CheckOut = lazy(() => import("./pages/CheckOut/CheckOut"));

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
      addCollectionAndDocuments(
        "collections",
        collectionsArray.map(({ title, items }) => ({ title, items }))
      );
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  this.props.currentUser ? (
                    <Redirect to="/" />
                  ) : (
                    <SignInAndSignUpPage />
                  )
                }
              />
              <Route path="/checkout" component={CheckOut} />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
