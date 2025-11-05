import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import "./RoleForm.css";
import axios from "axios";
import baseURL from "../../config";
import { useTheme } from "@mui/material/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import { tokens } from "../../theme";

const RoleForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { roleId, rollName, roleData, createRoleData } = location.state || {};
  const isEditing = !!rollName;

  const cardData = createRoleData || roleData || [] ;

  const initialValues = {
    roleId: roleId || "",
    roleName: rollName || "",
    selectedItems: cardData.flatMap((card) =>
      card.navbars
        .filter(
          (nav) =>
            nav.status === "TRUE" ||
            (nav.subItems && nav.subItems.some((s) => s.status === "TRUE"))
        )
        .flatMap((nav) => [
          nav.name,
          ...(nav.subItems
            ? nav.subItems.filter((s) => s.status === "TRUE").map((s) => s.name)
            : []),
        ])
    ),
  };

  /*const handleSubmit = (values) => {
    const formattedData = cardData.map((card) => ({
      headerName: card.headerName,
      navbars: card.navbars.map((nav) => ({
        listItemName: nav.name,
        status: values.selectedItems.includes(nav.name) ? "TRUE" : "FALSE",
        subItems: (nav.subItems || []).map((subItem) => ({
          parentName: nav.name,
          listItemName: subItem.name,
          status: values.selectedItems.includes(subItem.name)
            ? "TRUE"
            : "FALSE",
        })),
      })),
    }));

    console.log("Formatted Data:", JSON.stringify(formattedData, null, 2));
  };
*/
  const handleSubmit = async (values) => {
    // Modify cardData by updating status based on selectedItems
    const updatedCardData = cardData.map((card) => ({
      ...card,
      navbars: card.navbars.map((nav) => ({
        ...nav,
        status: values.selectedItems.includes(nav.name) ? "TRUE" : "FALSE",
        subItems: (nav.subItems || []).map((subItem) => ({
          ...subItem,
          status: values.selectedItems.includes(subItem.name)
            ? "TRUE"
            : "FALSE",
        })),
      })),
    }));

    const requestData = {
      roleId:values.roleId,
      roleName: values.roleName,
      cardData: updatedCardData, // ✅ Send entire modified cardData
    };

    try {
      await axios.post(
        `${baseURL}/role/submitNavbarheaderMapping`,
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/role-management"); 
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-container"  sx={{
      backgroundColor: colors.grey[1000],
      color: colors.primary[100],
      p: 4,
    }}>
      <h2>Role Details</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, setFieldValue }) => (
          <Form>
            <div className="form-header">
              {/* Role Name Input */}
              <div className="input-container">
              <Field type="hidden" name="roleId" value={values.roleId} />
                <label>Role Name:</label>
                <Field
                  type="text"
                  name="roleName"
                  value={values.roleName}
                  onChange={(e) => setFieldValue("roleName", e.target.value)}
                  placeholder="Enter role name"
                  required={!isEditing}
                  readOnly={isEditing}
                />
              </div>

              {/* Buttons */}
              <button type="submit" className="save-btn">
                Save
              </button>
              <button
                type="button"
                className="discard-btn"
                onClick={() => navigate("/role-management")}
              >
                Discard
              </button>
            </div>

            <div className="card-grid"  sx={{
          p: 3,
          backgroundColor: colors.primary[400],
          color: colors.primary[100],
        }}>
              {cardData.map((card, index) => {
                const allItems = card.navbars.flatMap((nav) => [
                  nav.name,
                  ...(nav.subItems ? nav.subItems.map((s) => s.name) : []),
                ]);
                const allSelected = allItems.every((item) =>
                  values.selectedItems.includes(item)
                );

                return (
                  <div key={index} className="card" style={{
                    padding: "12px",
                    backgroundColor: colors.primary[400],
                    color: colors.primary[100],
                  }}>
                  
                    <div className="card-header">
                      <span>{card.headerName}</span>
                      <label className="select-all-label">
                        <input
                          type="checkbox"
                          checked={allSelected}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFieldValue("selectedItems", [
                                ...new Set([
                                  ...values.selectedItems,
                                  ...allItems,
                                ]),
                              ]);
                            } else {
                              setFieldValue(
                                "selectedItems",
                                values.selectedItems.filter(
                                  (item) => !allItems.includes(item)
                                )
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
                          const subItemNames = subItems.map((s) => s.name);

                          const allSubItemsSelected =
                            subItems.length > 0 &&
                            subItems.every((subItem) =>
                              values.selectedItems.includes(subItem.name)
                            );

                          const isNavSelected =
                            values.selectedItems.includes(nav.name) ||
                            allSubItemsSelected;

                          return (
                            <React.Fragment key={idx}>
                              {/* Parent Checkbox */}
                              <li>
                                <label>
                                  <input
                                    type="checkbox"
                                    style={{ marginRight: "10px" }}
                                    checked={isNavSelected}
                                    onChange={(e) => {
                                      if (e.target.checked) {
                                        setFieldValue("selectedItems", [
                                          ...new Set([
                                            ...values.selectedItems,
                                            nav.name,
                                            ...subItemNames,
                                          ]),
                                        ]);
                                      } else {
                                        setFieldValue(
                                          "selectedItems",
                                          values.selectedItems.filter(
                                            (item) =>
                                              item !== nav.name &&
                                              !subItemNames.includes(item)
                                          )
                                        );
                                      }
                                    }}
                                  />
                                  {nav.name}
                                </label>
                              </li>
                              {/* Sub-items */}
                              {subItems.length > 0 && (
                                <ul className="sub-list">
                                  {subItems.map((subItem, subIdx) => {
                                    const isSubSelected =
                                      values.selectedItems.includes(
                                        subItem.name
                                      );
                                    return (
                                      <li key={subIdx}>
                                        <label>
                                          <input
                                            type="checkbox"
                                            style={{ marginRight: "10px" }}
                                            checked={isSubSelected}
                                            onChange={(e) => {
                                              let updatedSelectedItems;
                                              if (e.target.checked) {
                                                updatedSelectedItems = [
                                                  ...values.selectedItems,
                                                  subItem.name,
                                                ];
                                                if (
                                                  subItems.every((sItem) =>
                                                    updatedSelectedItems.includes(
                                                      sItem.name
                                                    )
                                                  )
                                                ) {
                                                  updatedSelectedItems.push(
                                                    nav.name
                                                  );
                                                }
                                              } else {
                                                updatedSelectedItems =
                                                  values.selectedItems.filter(
                                                    (item) =>
                                                      item !== subItem.name
                                                  );
                                                if (
                                                  !subItems.every((sItem) =>
                                                    updatedSelectedItems.includes(
                                                      sItem.name
                                                    )
                                                  )
                                                ) {
                                                  updatedSelectedItems =
                                                    updatedSelectedItems.filter(
                                                      (item) =>
                                                        item !== nav.name
                                                    );
                                                }
                                              }
                                              setFieldValue("selectedItems", [
                                                ...new Set(
                                                  updatedSelectedItems
                                                ),
                                              ]);
                                            }}
                                          />
                                          {subItem.name}
                                        </label>
                                      </li>
                                    );
                                  })}
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RoleForm;
