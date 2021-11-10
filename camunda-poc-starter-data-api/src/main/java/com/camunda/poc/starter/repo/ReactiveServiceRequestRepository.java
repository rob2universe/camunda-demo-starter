package com.camunda.poc.starter.repo;

import com.camunda.poc.starter.entity.data.ServiceRequestEntity;
import org.springframework.context.annotation.Profile;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Profile("camunda-custom-entities")
public interface ReactiveServiceRequestRepository {

	Flux<ServiceRequestEntity> findServiceRequestEntitiesByApprovedAndStarted(Boolean approved, Boolean started);

	Flux<ServiceRequestEntity> findServiceRequestEntitiesByRejectedAndStarted(Boolean rejected, Boolean started);

	Mono<ServiceRequestEntity> findServiceRequestByServiceId(String serviceId);

}