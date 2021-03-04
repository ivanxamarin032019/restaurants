import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input } from "react-native-elements";
import { isEmpty } from "lodash";

import { updateProfile } from "../../utils/actions";

export default function ChangeDisplayNameForm({
  displayName,
  setShowModal,
  toastRef,
  setReloadUser,
}) {
  const [newDisplayNanme, setNewDisplayNanme] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    const result = await updateProfile({ displayName: newDisplayNanme });
    setLoading(false);

    if (!result.statusResponse) {
      setError("Error al actualizar nombre y apellidos, intenta más tarde.");
      return;
    }

    setReloadUser(true);
    toastRef.current.show("Se han actualizado Nombre y Apellidos.", 3000);
    setShowModal(false);
  };

  const validateForm = () => {
    setError(null);

    if (isEmpty(newDisplayNanme)) {
      setError("Debes de ingresar nombre y apellidos.");
      return false;
    }
    if (newDisplayNanme === displayName) {
      setError(
        "Debes de ingresar nombre y apellidos diferentes a los actuales."
      );
      return false;
    }

    return true;
  };
  return (
    <View style={styles.view}>
      <Input
        placeholder="Ingresa Nombre y Apellidos"
        containerStyle={styles.input}
        defaultValue={displayName}
        onChange={(e) => setNewDisplayNanme(e.nativeEvent.text)}
        errorMessage={error}
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2",
        }}
      />
      <Button
        title="Cambiar nombre y apellidos"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={onSubmit}
        loading={loading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    paddingVertical: 10,
  },
  input: {
    marginBottom: 10,
  },
  btnContainer: {
    width: "95%",
  },
  btn: {
    backgroundColor: "#442484",
  },
});
