package com.wvs.anteair.login.service;

import com.wvs.anteair.login.model.Role;

/**
 * Created by christospapidas on 25012016--.
 */
public interface RoleService {

    Role findById(Long id);

    Role findByCode(String code);

}
