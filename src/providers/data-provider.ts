import type { BaseRecord, CreateParams, CreateResponse, DataProvider, DeleteOneParams, DeleteOneResponse } from "@refinedev/core";

const API_URL = "https://api.fake-rest.refine.dev";


export const dataProvider: DataProvider = {
    getOne: async ({ resource, id, meta }) => {
        const response = await fetch(`${API_URL}/${resource}/${id}`);

        if (response.status < 200 || response.status > 299) throw response;

        const data = await response.json();

        return { data };
    },
    update: () => {
        throw new Error("Not implemented");
    },
    getList: () => {
        throw new Error("Not implemented");
    },
    create: function <TData extends BaseRecord = BaseRecord, TVariables = {}>(params: CreateParams<TVariables>): Promise<CreateResponse<TData>> {
        throw new Error("Function not implemented.");
    },
    deleteOne: function <TData extends BaseRecord = BaseRecord, TVariables = {}>(params: DeleteOneParams<TVariables>): Promise<DeleteOneResponse<TData>> {
        throw new Error("Function not implemented.");
    },
    getApiUrl: function (): string {
        throw new Error("Function not implemented.");
    }
};