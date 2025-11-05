import React from "react";
import { Formik, Form, Field } from "formik";
import "./RoleForm.css";
import { mockdata } from "./mockData";

const cardData = mockdata;

const RoleForm = () => {
  const initialValues = {
    selectedItems: cardData.flatMap((card) =>
      card.navbars
        .filter((nav) => nav.status === "TRUE")
        .flatMap((nav) => [nav.name, ...(nav.subItems || [])])
    ),
  };

  const handleSubmit = (values) => {
    console.log("Selected Items:", values.selectedItems);
  };

  return (
    <div className="form-container">
      <h2>Role Details</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <Form>
            <div className="card-grid">
              {cardData.map((card, index) => {
                const allItems = card.navbars.flatMap((nav) => [nav.name, ...(nav.subItems || [])]);
                const allSelected = allItems.every((item) => values.selectedItems.includes(item));

                return (
                  <div key={index} className="card">
                    <div className="card-header">
                      <span>{card.headerName}</span>
                      <label className="select-all-label">
                        <input
                          type="checkbox"
                          checked={allSelected}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFieldValue("selectedItems", [...new Set([...values.selectedItems, ...allItems])]);
                            } else {
                              setFieldValue(
                                "selectedItems",
                                values.selectedItems.filter((item) => !allItems.includes(item))
                              );
                            }
                          }}
                        />
                        Select All
                      </label>
                    </div>
                    <div className="card-content">
                      <ul>
                        {card.navbars.map((nav, idx) => {
                          const subItems = nav.subItems || [];
                          const allSubItemsSelected = subItems.length > 0 && subItems.every((subItem) => values.selectedItems.includes(subItem));
                          const isNavSelected = values.selectedItems.includes(nav.name) || allSubItemsSelected;
                          const isSubSelected = values.selectedItems.includes(nav.subItems?.name)
                          return (
                            <React.Fragment key={idx}>
                              <li>
                                <label>
                                  <Field
                                    type="checkbox"
                                    name="selectedItems"
                                    value={nav.name}
                                    checked={isNavSelected}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setFieldValue("selectedItems", [...new Set([...values.selectedItems, nav.name, ...subItems])]);
                                      } else {
                                        setFieldValue(
                                          "selectedItems",
                                          values.selectedItems.filter((item) => item !== nav.name && !subItems.includes(item))
                                        );
                                      }
                                    }}
                                  />
                                  {nav.name}
                                </label>
                              </li>
                              {subItems.length > 0 && (
                                <ul className="sub-list">
                                  {subItems.map((subItem, subIdx) => (
                                    <li key={subIdx}>
                                      <label>
                                        <Field
                                          type="checkbox"
                                          name="selectedItems"
                                          value={subItem.name}
                                          checked={isSubSelected}
                                          onChange={(e) => {
                                            const updatedSelectedItems = e.target.checked
                                              ? [...values.selectedItems, subItem.name]
                                              : values.selectedItems.filter((item) => item !== subItem.name);
                                            // Ensure parent is selected if all sub-items are selected
                                            if (e.target.checked) {
                                              if (subItems.every((sItem) => updatedSelectedItems.includes(sItem.name))) {
                                                updatedSelectedItems.push(nav.name);
                                              }
                                            } else {
                                              updatedSelectedItems.splice(updatedSelectedItems.indexOf(nav.name), 1);
                                            }

                                            setFieldValue("selectedItems", [...new Set(updatedSelectedItems)]);
                                          }}
                                        />
                                        {subItem.name}
                                      </label>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RoleForm;
