import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import listingApi from "../api/listings";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  images: Yup.array()
    .min(1, "Please select at least one image.")
    .required("Images are required."),
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).label("Price"),
  category: Yup.object()
    .required("Category is required")
    // .nullable()
    .label("Category"),
  description: Yup.string().label("Description").required(),
});

const categories = [
  { label: "Furniture", value: 1, backgroundColor: "red", icon: "lamp" },
  { label: "Clothing", value: 2, backgroundColor: "blue", icon: "tshirt-crew" },
  { label: "Cameras", value: 3, backgroundColor: "green", icon: "camera" },
  { label: "Games", value: 4, backgroundColor: "black", icon: "cards" },
  { label: "Cars", value: 5, backgroundColor: "orange", icon: "car" },
  { label: "Sports", value: 6, backgroundColor: "purple", icon: "basketball" },
  {
    label: "Movies & Music",
    value: 7,
    backgroundColor: "brown",
    icon: "headphones",
  },
  { label: "Books", value: 8, backgroundColor: "pink", icon: "book" },
  {
    label: "Other",
    value: 9,
    backgroundColor: "grey",
    icon: "dots-horizontal",
  },
];

export default function ListingEditScreen() {
  const location = useLocation();

  const handleSumbit = async (listings) => {
    const result = await listingApi.addListing({ ...listings, location });
    // console.log("RESULT:", result);

    if (!result.ok) {
      // alert("Error: " + result.problem);
      return alert("Could not save the listing");
    }
    alert("Success");
  };

  return (
    <Screen>
      <AppForm
        initialValues={{
          images: [],
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={handleSumbit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({});
