import React from "react";

const RoleFormUtils = ({ values, setFieldValue, data }) => {
  // Handle parent module checkbox change
  const handleCheckboxChange = (category, moduleName, subitems = []) => {
    let selected = new Set(values[category] || []);

    // If already selected, remove the module and its submodules
    if (selected.has(moduleName)) {
      selected.delete(moduleName);
      subitems.forEach((sub) => selected.delete(sub.module_Name)); // Remove submodules
    } else {
      selected.add(moduleName);
      subitems.forEach((sub) => selected.add(sub.module_Name)); // Add submodules
    }

    setFieldValue(category, Array.from(selected)); // Update Formik state
  };

  // Handle submodule checkbox change
  const handleSubCheckboxChange = (category, parentModule, subModule) => {
    let selected = new Set(values[category] || []);

    // Toggle submodule selection
    if (selected.has(subModule)) {
      selected.delete(subModule);
    } else {
      selected.add(subModule);
    }

    // Get parent module and check if all its submodules are selected
    const parentItem = data[category].find((item) => item.module_Name === parentModule);
    const allSubSelected = parentItem?.subitems?.every((sub) => selected.has(sub.module_Name));

    // If all submodules are selected, select the parent; otherwise, deselect it
    if (allSubSelected) {
      selected.add(parentModule);
    } else {
      selected.delete(parentModule);
    }

    setFieldValue(category, Array.from(selected)); // Update Formik state
  };

  // Handle "Select All" functionality
  const handleSelectAll = (category, items) => {
    const allModuleNames = items.flatMap((item) =>
      item.subitems ? [item.module_Name, ...item.subitems.map((sub) => sub.module_Name)] : [item.module_Name]
    );

    const allSelected = allModuleNames.every((moduleName) => values[category]?.includes(moduleName));

    setFieldValue(category, allSelected ? [] : allModuleNames);
  };

  return (
    <div className="mt-4">
      {Object.entries(data).map(([category, items]) => (
        <div key={category} className="border p-4 rounded-lg mb-4 shadow-md">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">{category.replace(/([A-Z])/g, " $1").trim()}</h3>
            <button
              type="button"
              className="text-blue-500 text-sm underline"
              onClick={() => handleSelectAll(category, items)}
            >
              {values[category]?.length === items.flatMap((item) => [item.module_Name, ...(item.subitems || [])]).length
                ? "Unselect All"
                : "Select All"}
            </button>
          </div>

          <ul className="ml-4 mt-2 list-none">
            {items.map((item) => (
              <li key={item.module_Name} className="mb-2">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={values[category]?.includes(item.module_Name)}
                    onChange={() => handleCheckboxChange(category, item.module_Name, item.subitems || [])}
                  />
                  <label>{item.name}</label>
                </div>

                {item.subitems && (
                  <ul className="ml-6 border-l-2 border-gray-300 pl-4 list-none">
                    {item.subitems.map((sub) => (
                      <li key={sub.module_Name} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={values[category]?.includes(sub.module_Name)}
                          onChange={() => handleSubCheckboxChange(category, item.module_Name, sub.module_Name)}
                        />
                        <label>{sub.name}</label>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RoleFormUtils;
