"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var material_react_table_1 = require("material-react-table");
var material_1 = require("@mui/material");
var react_query_1 = require("@tanstack/react-query");
var makeData_1 = require("./makeData");
var Example = function () {
    var _a = (0, react_1.useState)({}), validationErrors = _a[0], setValidationErrors = _a[1];
    var columns = (0, react_1.useMemo)(function () { return [
        {
            accessorKey: 'id',
            header: 'Id',
            enableEditing: false,
            size: 80,
        },
        {
            accessorKey: 'firstName',
            header: 'First Name',
            muiEditTextFieldProps: {
                required: true,
                error: !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.firstName),
                helperText: validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.firstName,
                //remove any previous validation errors when user focuses on the input
                onFocus: function () {
                    return setValidationErrors(__assign(__assign({}, validationErrors), { firstName: undefined }));
                },
                //optionally add validation checking for onBlur or onChange
            },
        },
        {
            accessorKey: 'lastName',
            header: 'Last Name',
            muiEditTextFieldProps: {
                required: true,
                error: !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.lastName),
                helperText: validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.lastName,
                //remove any previous validation errors when user focuses on the input
                onFocus: function () {
                    return setValidationErrors(__assign(__assign({}, validationErrors), { lastName: undefined }));
                },
            },
        },
        {
            accessorKey: 'email',
            header: 'Email',
            muiEditTextFieldProps: {
                type: 'email',
                required: true,
                error: !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.email),
                helperText: validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.email,
                //remove any previous validation errors when user focuses on the input
                onFocus: function () {
                    return setValidationErrors(__assign(__assign({}, validationErrors), { email: undefined }));
                },
            },
        },
        {
            accessorKey: 'state',
            header: 'State',
            editVariant: 'select',
            editSelectOptions: makeData_1.usStates,
            muiEditTextFieldProps: {
                select: true,
                error: !!(validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.state),
                helperText: validationErrors === null || validationErrors === void 0 ? void 0 : validationErrors.state,
            },
        },
    ]; }, [validationErrors]);
    //call CREATE hook
    var _b = useCreateUser(), createUser = _b.mutateAsync, isCreatingUser = _b.isPending;
    //call READ hook
    var _c = useGetUsers(), _d = _c.data, fetchedUsers = _d === void 0 ? [] : _d, isLoadingUsersError = _c.isError, isFetchingUsers = _c.isFetching, isLoadingUsers = _c.isLoading;
    //call UPDATE hook
    var _e = useUpdateUser(), updateUser = _e.mutateAsync, isUpdatingUser = _e.isPending;
    //call DELETE hook
    var _f = useDeleteUser(), deleteUser = _f.mutateAsync, isDeletingUser = _f.isPending;
    //CREATE action
    var handleCreateUser = function (_a) {
        var values = _a.values, table = _a.table;
        return __awaiter(void 0, void 0, void 0, function () {
            var newValidationErrors;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        newValidationErrors = validateUser(values);
                        if (Object.values(newValidationErrors).some(function (error) { return error; })) {
                            setValidationErrors(newValidationErrors);
                            return [2 /*return*/];
                        }
                        setValidationErrors({});
                        return [4 /*yield*/, createUser(values)];
                    case 1:
                        _b.sent();
                        table.setCreatingRow(null); //exit creating mode
                        return [2 /*return*/];
                }
            });
        });
    };
    //UPDATE action
    var handleSaveUser = function (_a) {
        var values = _a.values, table = _a.table;
        return __awaiter(void 0, void 0, void 0, function () {
            var newValidationErrors;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        newValidationErrors = validateUser(values);
                        if (Object.values(newValidationErrors).some(function (error) { return error; })) {
                            setValidationErrors(newValidationErrors);
                            return [2 /*return*/];
                        }
                        setValidationErrors({});
                        return [4 /*yield*/, updateUser(values)];
                    case 1:
                        _b.sent();
                        table.setEditingRow(null); //exit editing mode
                        return [2 /*return*/];
                }
            });
        });
    };
    //DELETE action
    var openDeleteConfirmModal = function (row) {
        if (window.confirm('Are you sure you want to delete this user?')) {
            deleteUser(row.original.id);
        }
    };
    var table = (0, material_react_table_1.useMaterialReactTable)({
        columns: columns,
        data: fetchedUsers,
        createDisplayMode: 'modal',
        editDisplayMode: 'modal',
        enableEditing: true,
        getRowId: function (row) { return row.id; },
        muiToolbarAlertBannerProps: isLoadingUsersError
            ? {
                color: 'error',
                children: 'Error loading data',
            }
            : undefined,
        muiTableContainerProps: {
            sx: {
                minHeight: '500px',
            },
        },
        onCreatingRowCancel: function () { return setValidationErrors({}); },
        onCreatingRowSave: handleCreateUser,
        onEditingRowCancel: function () { return setValidationErrors({}); },
        onEditingRowSave: handleSaveUser,
        //optionally customize modal content
        renderCreateRowDialogContent: function (_a) {
            var table = _a.table, row = _a.row, internalEditComponents = _a.internalEditComponents;
            return variant = "h3" > Create;
        },
        New: New
    } / material_1.DialogTitle >
        sx, {}, { display: 'flex', flexDirection: 'column', gap: '1rem' });
};
    >
        { internalEditComponents: internalEditComponents };
{ /* or render custom edit components here */ }
/DialogContent>
    < material_1.DialogActions >
    variant;
"text";
table = { table: table };
row = { row: row } /  >
    /DialogActions>
    < />;
//optionally customize modal content
renderEditRowDialogContent: (function (_a) {
    var table = _a.table, row = _a.row, internalEditComponents = _a.internalEditComponents;
    return variant = "h3" > Edit;
});
User < /DialogTitle>
    < material_1.DialogContent;
sx = {};
{
    display: 'flex', flexDirection;
    'column', gap;
    '1.5rem';
}
    >
        { internalEditComponents: internalEditComponents };
{ /* or render custom edit components here */ }
/DialogContent>
    < material_1.DialogActions >
    variant;
"text";
table = { table: table };
row = { row: row } /  >
    /DialogActions>
    < />;
renderRowActions: (function (_a) {
    var row = _a.row, table = _a.table;
    return sx = {};
});
{
    display: 'flex', gap;
    '1rem';
}
 >
    title;
"Edit" >
    onClick;
{
    (function () { return table.setEditingRow(row); });
}
 >
    />
    < /IconButton>
    < /Tooltip>
    < material_1.Tooltip;
title = "Delete" >
    color;
"error";
onClick = {}();
openDeleteConfirmModal(row);
 >
    />
    < /IconButton>
    < /Tooltip>
    < /Box>;
renderTopToolbarCustomActions: (function (_a) {
    var table = _a.table;
    return variant = "contained";
});
onClick = {}();
{
    table.setCreatingRow(true); //simplest way to open the create row modal with no default values
    //or you can pass in a row object to set default values with the `createRow` helper function
    // table.setCreatingRow(
    //   createRow(table, {
    //     //optionally pass in default values for the new row, useful for nested data or other complex scenarios
    //   }),
    // );
}
    >
        Create;
New;
User
    < /Button>;
state: {
    isLoading: isLoadingUsers,
        isSaving;
    isCreatingUser || isUpdatingUser || isDeletingUser,
        showAlertBanner;
    isLoadingUsersError,
        showProgressBars;
    isFetchingUsers,
    ;
}
;
return table;
{
    table;
}
/>;;
;
//CREATE hook (post new user to api)
function useCreateUser() {
    var _this = this;
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (user) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //send api update request here
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                    case 1:
                        //send api update request here
                        _a.sent(); //fake api call
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        }); },
        //client side optimistic update
        onMutate: function (newUserInfo) {
            queryClient.setQueryData(['users'], function (prevUsers) {
                return __spreadArray(__spreadArray([], prevUsers, true), [
                    __assign(__assign({}, newUserInfo), { id: (Math.random() + 1).toString(36).substring(7) }),
                ], false);
            });
        },
        // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
    });
}
//READ hook (get users from api)
function useGetUsers() {
    var _this = this;
    return (0, react_query_1.useQuery)({
        queryKey: ['users'],
        queryFn: function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //send api request here
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                    case 1:
                        //send api request here
                        _a.sent(); //fake api call
                        return [2 /*return*/, Promise.resolve(makeData_1.fakeData)];
                }
            });
        }); },
        refetchOnWindowFocus: false,
    });
}
//UPDATE hook (put user in api)
function useUpdateUser() {
    var _this = this;
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (user) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //send api update request here
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                    case 1:
                        //send api update request here
                        _a.sent(); //fake api call
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        }); },
        //client side optimistic update
        onMutate: function (newUserInfo) {
            queryClient.setQueryData(['users'], function (prevUsers) {
                return prevUsers === null || prevUsers === void 0 ? void 0 : prevUsers.map(function (prevUser) {
                    return prevUser.id === newUserInfo.id ? newUserInfo : prevUser;
                });
            });
        },
        // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
    });
}
//DELETE hook (delete user in api)
function useDeleteUser() {
    var _this = this;
    var queryClient = (0, react_query_1.useQueryClient)();
    return (0, react_query_1.useMutation)({
        mutationFn: function (userId) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //send api update request here
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000); })];
                    case 1:
                        //send api update request here
                        _a.sent(); //fake api call
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        }); },
        //client side optimistic update
        onMutate: function (userId) {
            queryClient.setQueryData(['users'], function (prevUsers) {
                return prevUsers === null || prevUsers === void 0 ? void 0 : prevUsers.filter(function (user) { return user.id !== userId; });
            });
        },
        // onSettled: () => queryClient.invalidateQueries({ queryKey: ['users'] }), //refetch users after mutation, disabled for demo
    });
}
//react query setup in App.tsx
var ReactQueryDevtoolsProduction = (0, react_1.lazy)(function () {
    return Promise.resolve().then(function () { return require('@tanstack/react-query-devtools/build/modern/production.js'); }).then(function (d) { return ({
        default: d.ReactQueryDevtools,
    }); });
});
var queryClient = new react_query_1.QueryClient();
function App() {
    return client = { queryClient: queryClient } >
        />
        < react_1.Suspense;
    fallback = { null:  } >
        />
        < /Suspense>
        < /QueryClientProvider>;
    ;
}
exports.default = App;
var validateRequired = function (value) { return !!value.length; };
var validateEmail = function (email) {
    return !!email.length &&
        email
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
function validateUser(user) {
    return {
        firstName: !validateRequired(user.firstName)
            ? 'First Name is Required'
            : '',
        lastName: !validateRequired(user.lastName) ? 'Last Name is Required' : '',
        email: !validateEmail(user.email) ? 'Incorrect Email Format' : '',
    };
}
