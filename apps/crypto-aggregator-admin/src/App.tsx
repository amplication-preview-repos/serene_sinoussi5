import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { JupiterPriceList } from "./jupiterPrice/JupiterPriceList";
import { JupiterPriceCreate } from "./jupiterPrice/JupiterPriceCreate";
import { JupiterPriceEdit } from "./jupiterPrice/JupiterPriceEdit";
import { JupiterPriceShow } from "./jupiterPrice/JupiterPriceShow";
import { RaydiumPriceList } from "./raydiumPrice/RaydiumPriceList";
import { RaydiumPriceCreate } from "./raydiumPrice/RaydiumPriceCreate";
import { RaydiumPriceEdit } from "./raydiumPrice/RaydiumPriceEdit";
import { RaydiumPriceShow } from "./raydiumPrice/RaydiumPriceShow";
import { OrcaPriceList } from "./orcaPrice/OrcaPriceList";
import { OrcaPriceCreate } from "./orcaPrice/OrcaPriceCreate";
import { OrcaPriceEdit } from "./orcaPrice/OrcaPriceEdit";
import { OrcaPriceShow } from "./orcaPrice/OrcaPriceShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CryptoAggregator"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="JupiterPrice"
          list={JupiterPriceList}
          edit={JupiterPriceEdit}
          create={JupiterPriceCreate}
          show={JupiterPriceShow}
        />
        <Resource
          name="RaydiumPrice"
          list={RaydiumPriceList}
          edit={RaydiumPriceEdit}
          create={RaydiumPriceCreate}
          show={RaydiumPriceShow}
        />
        <Resource
          name="OrcaPrice"
          list={OrcaPriceList}
          edit={OrcaPriceEdit}
          create={OrcaPriceCreate}
          show={OrcaPriceShow}
        />
      </Admin>
    </div>
  );
};

export default App;
