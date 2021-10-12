import { MixApiService } from '../axios/api';
export class MixRepository {
    constructor(appUrl, modelName, viewName, specificulture, config) {
        this.service = new MixApiService(config);
        this.service.instance.defaults.baseURL = appUrl;
        this.modelType = modelName;
        this.viewName = viewName;
        this.specificulture = specificulture;
    }
    get modelUrl() {
        return this.specificulture
            ? `/rest/${this.specificulture}/${this.modelType}/${this.viewName}`
            : `/rest/${this.modelType}/${this.viewName}`;
    }
    getSingleModel(id, queries) {
        this.service.instance.defaults.params = queries;
        return this.service.get(`${this.modelUrl}/${id}`);
    }
    getDefaultModel(queries) {
        this.service.instance.defaults.params = queries;
        return this.service.get(`default`);
    }
    getListModel(params) {
        this.service.instance.defaults.params = params;
        return this.service.get(this.modelUrl);
    }
    createModel(model) {
        return this.service.post(this.modelUrl, model);
    }
    updateModel(id, model) {
        return this.service.put(`${this.modelUrl}/${id}`, model);
    }
    updateFields(id, fields) {
        return this.service.patch(`${this.modelUrl}/${id}`, fields);
    }
    deleteModel(id) {
        return this.service.delete(`${id}`);
    }
    duplicateModel(id, queries) {
        this.service.instance.defaults.params = queries;
        return this.service.get(`${this.modelUrl}/duplicate/${id}`);
    }
    exportListModel(queries) {
        this.service.instance.defaults.params = queries;
        return this.service.get(`${this.modelUrl}/export`);
    }
    clearCache(id) {
        return this.service.get(`${this.modelUrl}/remove-cache/${id}`);
    }
    setLanguage(specificulture) {
        this.specificulture = specificulture;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWl4LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2luZnJhc3RydWN0dXJlL2Jhc2UvbWl4LXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM3QyxNQUFNLE9BQU8sYUFBYTtJQVV4QixZQUNFLE1BQWMsRUFDZCxTQUF1QixFQUN2QixRQUFnQixFQUNoQixjQUE4QixFQUM5QixNQUEyQjtRQUUzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3ZDLENBQUM7SUFsQkQsSUFBVyxRQUFRO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGNBQWM7WUFDeEIsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbkUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQWdCTSxjQUFjLENBQUMsRUFBbUIsRUFBRSxPQUFlO1FBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLGVBQWUsQ0FBQyxPQUFlO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2hELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLFlBQVksQ0FBQyxNQUFxQjtRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUMvQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sV0FBVyxDQUFDLEtBQVE7UUFDekIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTSxXQUFXLENBQUMsRUFBbUIsRUFBRSxLQUFRO1FBQzlDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFTSxZQUFZLENBQUMsRUFBbUIsRUFBRSxNQUFhO1FBQ3BELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSxXQUFXLENBQUMsRUFBbUI7UUFDcEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLGNBQWMsQ0FBQyxFQUFtQixFQUFFLE9BQWU7UUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDaEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0sZUFBZSxDQUFDLE9BQWU7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDaEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxVQUFVLENBQUMsRUFBb0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTSxXQUFXLENBQUMsY0FBc0I7UUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDdkMsQ0FBQztDQUNGIn0=